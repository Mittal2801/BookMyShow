from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("addmovie/",views.add_movie),
    path("api/movies/",views.movie_api),
    path("addstream/",views.add_stream),
    path("api/streams/",views.stream_api),
    path("addevent/",views.add_event),
    path("api/events/",views.event_api),
]