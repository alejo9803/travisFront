from django.shortcuts import render

from rest_framework import generics

from software_app.models import Psicologo, Paciente, Pregunta, Historia, Respuesta, Opcion, Pregunta_Paciente, Opcion_Pregunta 

from software_app.serializer import PsicologoSerializer, PacienteSerializer, PreguntaSerializer, HistoriaSerializer, RespuestaSerializer, OpcionSerializer, Pregunta_PacienteSerializer, Opcion_PreguntaSerializer


class PsicologoList(generics.ListCreateAPIView):
	queryset = Psicologo.objects.all()
	serializer_class = PsicologoSerializer

class PsicologoDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Psicologo.objects.all()
	serializer_class = PsicologoSerializer

class PacienteList(generics.ListCreateAPIView):
	queryset = Paciente.objects.all()
	serializer_class = PacienteSerializer

class PacienteDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Paciente.objects.all()
	serializer_class = PacienteSerializer

class PreguntaList(generics.ListCreateAPIView):
	queryset = Pregunta.objects.all()
	serializer_class = PreguntaSerializer

class PreguntaDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Pregunta.objects.all()
	serializer_class = PreguntaSerializer

class HistoriaList(generics.ListCreateAPIView):
	queryset = Historia.objects.all()
	serializer_class = HistoriaSerializer

class HistoriaDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Historia.objects.all()
	serializer_class = HistoriaSerializer

class RespuestaList(generics.ListCreateAPIView):
	queryset = Respuesta.objects.all()
	serializer_class = RespuestaSerializer

class RespuestaDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Respuesta.objects.all()
	serializer_class = RespuestaSerializer

class OpcionList(generics.ListCreateAPIView):
	queryset = Opcion.objects.all()
	serializer_class = OpcionSerializer

class OpcionDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Opcion.objects.all()
	serializer_class = OpcionSerializer

class Pregunta_PacienteList(generics.ListCreateAPIView):
	queryset = Pregunta_Paciente.objects.all()
	serializer_class = Pregunta_PacienteSerializer

class Pregunta_PacienteDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Pregunta_Paciente.objects.all()
	serializer_class = Pregunta_PacienteSerializer

class Opcion_PreguntaList(generics.ListCreateAPIView):
	queryset = Opcion_Pregunta.objects.all()
	serializer_class = Opcion_PreguntaSerializer

class Opcion_PreguntaDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Opcion_Pregunta.objects.all()
	serializer_class = Opcion_PreguntaSerializer
# Create your views here.
