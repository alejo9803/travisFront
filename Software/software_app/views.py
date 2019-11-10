from django.shortcuts import render

from rest_framework import generics

from software_app.models import Psicologo, Paciente, Pregunta, Historia, Pregunta_Paciente, Contador

from software_app.serializer import PsicologoSerializer, PacienteSerializer, PreguntaSerializer, HistoriaSerializer, Pregunta_PacienteSerializer, ContadorSerializer


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

class Pregunta_PacienteList(generics.ListCreateAPIView):
	queryset = Pregunta_Paciente.objects.all()
	serializer_class = Pregunta_PacienteSerializer

class Pregunta_PacienteDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Pregunta_Paciente.objects.all()
	serializer_class = Pregunta_PacienteSerializer

class ContadorList(generics.ListCreateAPIView):
	queryset = Contador.objects.all()
	serializer_class = ContadorSerializer

class ContadorDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset=Contador.objects.all()
	serializer_class = ContadorSerializer

# Create your views here.
