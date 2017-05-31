# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
# Create your models here.

class GalleryManager(models.Manager):
    def createPic(self, info):
        print info
        pic = Picture.objects.create(image=info['image'], fk_creator=info['creator'])
        return

    def likePic(self, id):
        pic = Picture.objects.get(id=id)
        pic.likes = pic.likes + 1
        pic.save()
        return

class Picture(models.Model):
    image = models.FileField(null=True, blank=True, upload_to='uploads/%Y/%m/%d/')
    likes = models.IntegerField(default=0)
    fk_creator = models.ForeignKey('LogReg.userDB', related_name='pic_creator')
    objects = GalleryManager()
    def __str__(self):
        return "ID %s | IMAGE: %s | CREATOR: %s" % (self.id, self.image, self.fk_creator)
