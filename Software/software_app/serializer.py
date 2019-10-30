from rest_framework import serializers

from software_app.models import Psicologo, Paciente, Historia, Pregunta, Respuesta, Opcion, Opcion_Pregunta, Pregunta_Paciente

class PsicologoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Psicologo
		fields = ('idPsicologo','nombre','email','clave')

class PacienteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Paciente
		fields = ('idPaciente','nombre','sexo','fechaDeNacimiento','ocupacion','descripcion','direccion','numeroCelular','idPsicologo')

class OpcionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Opcion
		fields = ('idOpcion','descripcion')

class RespuestaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Respuesta
		fields = ('idRespuesta','idOpcion')

class PreguntaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pregunta
		fields = ('idPregunta','descripcion','idRespuesta')

class Pregunta_PacienteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pregunta_Paciente
		fields = ('idPregunta_Paciente','idPaciente','idPregunta')

class HistoriaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Historia
		fields = ('idHistoria','descripcion','fecha','prediccion','idPsicologo','idPregunta')

class Opcion_PreguntaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Opcion_Pregunta
		fields = ('idOpcion_Pregunta','idOpcion','idPregunta')