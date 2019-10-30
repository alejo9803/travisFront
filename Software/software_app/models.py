from django.db import models
from datetime import date

# Create your models here.
class Psicologo(models.Model):
	idPsicologo=models.IntegerField(primary_key=True)
	nombre=models.CharField( max_length=50, null=False)
	email=models.CharField( max_length=30, null=False)
	clave=models.CharField( max_length=20, null=False)

class Paciente(models.Model):
	idPaciente=models.IntegerField(primary_key=True)
	nombre=models.CharField(max_length=50, null=False)
	sexo=models.CharField(max_length=1, null=False)
	fechaDeNacimiento=models.CharField(max_length=30,null=False)
	ocupacion=models.CharField(max_length=20, blank=True)
	descripcion=models.CharField(max_length=100, blank=True)
	direccion=models.CharField(max_length=100, null=False)
	numeroCelular=models.IntegerField(blank=True, null=True)
	idPsicologo=models.ForeignKey('Psicologo', on_delete=models.CASCADE)

class Opcion(models.Model):
	idOpcion=models.IntegerField(primary_key=True)
	descripcion=models.CharField(max_length=100, null=False)

class Respuesta(models.Model):
	idRespuesta=models.IntegerField(primary_key=True)
	idOpcion=models.ForeignKey('Opcion', on_delete=models.CASCADE, null=False, blank=False)

class Pregunta(models.Model):
	idPregunta=models.IntegerField(primary_key=True)
	descripcion=models.CharField(max_length=100, null=False)
	idRespuesta=models.ForeignKey('Respuesta', on_delete=models.CASCADE, blank=True, null=True)

class Pregunta_Paciente(models.Model):
	idPregunta_Paciente=models.IntegerField(primary_key=True)
	idPaciente=models.ForeignKey('Paciente', on_delete=models.CASCADE)
	idPregunta=models.ForeignKey('Pregunta', on_delete=models.CASCADE)

class Historia(models.Model):
	idHistoria=models.IntegerField(primary_key=True)
	descripcion=models.CharField(max_length=100, blank=True)
	fecha=models.CharField(max_length=30,null=False)
	prediccion=models.CharField(max_length=50, blank=True)
	idPsicologo=models.ForeignKey('Psicologo', on_delete=models.CASCADE)
	idPregunta_Paciente=models.ForeignKey('Pregunta_Paciente', on_delete=models.CASCADE)

class Opcion_Pregunta(models.Model):
	idOpcion_Pregunta=models.IntegerField(primary_key=True)
	idOpcion=models.ForeignKey('Opcion', on_delete=models.CASCADE)
	idPregunta=models.ForeignKey('Pregunta', on_delete=models.CASCADE)

		