# Generated by Django 2.2.6 on 2019-10-19 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('software_app', '0003_auto_20191018_2339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='numeroCelular',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]