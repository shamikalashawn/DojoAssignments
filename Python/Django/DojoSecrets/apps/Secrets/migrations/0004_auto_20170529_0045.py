# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-29 00:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Secrets', '0003_secretdb_likes'),
    ]

    operations = [
        migrations.CreateModel(
            name='like',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='secretdb',
            name='likes',
        ),
        migrations.AddField(
            model_name='like',
            name='secret_like',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='like_secret', to='Secrets.secretDB'),
        ),
        migrations.AddField(
            model_name='like',
            name='user_like',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='like_user', to='Secrets.userDB'),
        ),
    ]