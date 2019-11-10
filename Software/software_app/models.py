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

class Pregunta(models.Model):
	idPregunta=models.IntegerField(primary_key=True)
	descripcion=models.CharField(max_length=100, null=False)

class Historia(models.Model):
	idHistoria=models.IntegerField(primary_key=True)
	descripcion=models.CharField(max_length=100, blank=True)
	fecha=models.CharField(max_length=30,null=False)
	prediccion=models.CharField(max_length=50, blank=True)
	idPsicologo=models.ForeignKey('Psicologo', on_delete=models.CASCADE)

class Pregunta_Paciente(models.Model):
	idPregunta_Paciente=models.IntegerField(primary_key=True)
	idPaciente=models.ForeignKey('Paciente', on_delete=models.CASCADE)
	idPregunta=models.ForeignKey('Pregunta', on_delete=models.CASCADE)
	idHistoria=models.ForeignKey('Historia', on_delete=models.CASCADE, blank=True)
	respuesta=models.CharField(max_length=2, blank=True, null=True)

class Contador(models.Model):
	idContador=models.IntegerField(primary_key=True)
	contadorHistorias=models.IntegerField(null=False)
	contadorPregunta_Paciente=models.IntegerField(null=False)


	


		