# Generated by Django 2.2.6 on 2019-11-07 14:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('software_app', '0008_auto_20191106_0214'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historia',
            name='idPregunta_Paciente',
        ),
        migrations.AddField(
            model_name='pregunta_paciente',
            name='idHistoria',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='software_app.Historia'),
            preserve_default=False,
        ),
    ]