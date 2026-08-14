from django.db import models

# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=200)
    language = models.CharField(max_length=100)
    genre = models.ManyToManyField(Genre)
    duration = models.CharField(max_length=20)
    certificate = models.CharField(max_length=10)
    release_date = models.DateField()
    interested = models.IntegerField(default=0)
    poster = models.URLField()
    
    def __str__(self):
        return self.title
    
class StreamType(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Stream(models.Model):
    title = models.CharField(max_length=200)
    duration = models.CharField(max_length=20)
    certificate = models.CharField(max_length=10)
    release_date = models.DateField()
    interested = models.CharField(max_length=10)
    language = models.CharField(max_length=100)
    rent = models.IntegerField(default=0)
    poster = models.URLField()
    # type = models.CharField(max_length=100)
    stream_type = models.ForeignKey(
        StreamType,
        on_delete=models.CASCADE,
        related_name="streams"
    )
    
    def __str__(self):
        return self.title
    
    
class Language(models.Model):
    lang = models.CharField(max_length=200)
    
    def __str__(self):
        return self.lang
    
    
    
class EventType(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
    
class Event(models.Model):
    title = models.CharField(max_length=200)
    image = models.URLField()
    interested = models.IntegerField(default=0)
    date = models.DateField()
    starttime = models.TimeField()
    duration = models.CharField(max_length=200)
    lang = models.ManyToManyField(Language)
    age = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    about = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    event_type = models.ForeignKey(
            EventType,
            on_delete=models.CASCADE,
            related_name="events"
        )
    
    def __str__(self):
        return self.title