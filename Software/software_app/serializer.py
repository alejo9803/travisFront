from rest_framework import serializers

from software_app.models import Psicologo, Paciente, Historia, Pregunta, Pregunta_Paciente

class PsicologoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Psicologo
		fields = ('idPsicologo','nombre','email','clave')

class PacienteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Paciente
		fields = ('idPaciente','nombre','sexo','fechaDeNacimiento','ocupacion','descripcion','direccion','numeroCelular','idPsicologo')

class PreguntaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pregunta
		fields = ('idPregunta','descripcion')

class Pregunta_PacienteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pregunta_Paciente
		fields = ('idPregunta_Paciente','idPaciente','idPregunta','respuesta')

class HistoriaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Historia
		fields = ('idHistoria','descripcion','fecha','prediccion','idPsicologo','idPregunta_Paciente')
