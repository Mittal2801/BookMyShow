from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Movie, Genre, Stream, StreamType, Event, EventType, Language


def add_movie(request):

    genres = Genre.objects.all()

    if request.method == "POST":

        movie = Movie.objects.create(
            title=request.POST["title"],
            language=request.POST["language"],
            duration=request.POST["duration"],
            certificate=request.POST["certificate"],
            release_date=request.POST["release_date"],
            interested=request.POST["interested"],
            poster=request.POST["poster"],
        )

        genre_ids = request.POST.getlist("genre")
        movie.genre.set(genre_ids)

        return redirect("/addmovie/")

    return render(
        request,
        "add_movie.html",
        {"genres": genres}
    )


def movie_api(request):

    movies = Movie.objects.prefetch_related("genre").all()

    data = []

    for movie in movies:

        data.append({
            "id": movie.id,
            "title": movie.title,
            "language": movie.language,
            "genre": [
                g.name for g in movie.genre.all()
            ],
            "duration": movie.duration,
            "certificate": movie.certificate,
            "release_date": str(movie.release_date),
            "interested": movie.interested,
            "poster": movie.poster,
        })

    return JsonResponse(data, safe=False)


# ================= STREAM =================

def add_stream(request):

    streamtypes = StreamType.objects.all()

    if request.method == "POST":

        Stream.objects.create(
            title=request.POST["title"],
            duration=request.POST["duration"],
            certificate=request.POST["certificate"],
            release_date=request.POST["release_date"],
            interested=request.POST["interested"],
            language=request.POST["language"],
            rent=request.POST["rent"],
            poster=request.POST["poster"],

            stream_type=StreamType.objects.get(
                id=request.POST["streamtype"]
            )
        )

        return redirect("/addstream/")

    return render(
        request,
        "add_stream.html",
        {"streamtypes": streamtypes}
    )


def stream_api(request):

    streamtypes = StreamType.objects.prefetch_related(
        "streams"
    ).all()

    data = []

    for streamtype in streamtypes:

        streams_data = []

        for stream in streamtype.streams.all():

            streams_data.append({
                "id": stream.id,
                "title": stream.title,
                "duration": stream.duration,
                "certificate": stream.certificate,
                "release_date": str(stream.release_date),
                "interested": stream.interested,
                "language": stream.language,
                "rent": stream.rent,
                "poster": stream.poster,
            })

        data.append({
            "id": streamtype.id,
            "name": streamtype.name,
            "streams": streams_data,
        })

    return JsonResponse(data, safe=False)


# ================= EVENT =================

def add_event(request):

    eventtypes = EventType.objects.all()
    languages = Language.objects.all()

    if request.method == "POST":

        lang_ids = request.POST.getlist("lang")

        event = Event.objects.create(
            title=request.POST["title"],
            image=request.POST["image"],
            interested=request.POST["interested"],
            date=request.POST["date"],
            starttime=request.POST["starttime"],
            duration=request.POST["duration"],
            age=request.POST["age"],
            price=request.POST["price"],
            about=request.POST["about"],
            location=request.POST["location"],

            event_type=EventType.objects.get(
                id=request.POST["event_type"]
            )
        )

        event.lang.set(lang_ids)

        return redirect("/addevent/")

    return render(
        request,
        "add_event.html",
        {
            "eventtypes": eventtypes,
            "languages": languages
        }
    )


def event_api(request):

    events = Event.objects.prefetch_related(
        "lang"
    ).select_related(
        "event_type"
    ).all()

    data = []

    for event in events:

        data.append({
            "id": event.id,
            "title": event.title,
            "image": event.image,
            "interested": event.interested,
            "date": str(event.date),
            "starttime": str(event.starttime),
            "duration": event.duration,
            "age": event.age,
            "price": event.price,
            "about": event.about,
            "location": event.location,
            "event_type": event.event_type.name,
            "languages": [
                language.lang
                for language in event.lang.all()
            ],
        })

    return JsonResponse(data, safe=False)