from django.contrib import admin
from .models import Movie
from .models import Genre
from .models import Stream
from .models import StreamType
from .models import Event
from .models import EventType
from .models import Language

# Register your models here.

admin.site.register(Movie)
admin.site.register(Genre)
admin.site.register(Stream)
admin.site.register(StreamType)
admin.site.register(Event)
admin.site.register(EventType)
admin.site.register(Language)
