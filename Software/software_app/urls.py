from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers

from . import views



urlpatterns = [
	
	url(r'^psicologo$', views.PsicologoList.as_view()),
	url(r'psicologo/(?P<pk>[0-9]+)$', views.PsicologoDetail.as_view()),
	url(r'^paciente$', views.PacienteList.as_view()),
	url(r'paciente/(?P<pk>[0-9]+)$', views.PacienteDetail.as_view()),
	url(r'^pregunta$', views.PreguntaList.as_view()),
	url(r'pregunta/(?P<pk>[0-9]+)$', views.PreguntaDetail.as_view()),
	url(r'^respuesta$', views.RespuestaList.as_view()),
	url(r'respuesta/(?P<pk>[0-9]+)$', views.RespuestaDetail.as_view()),
	url(r'^opcion$', views.OpcionList.as_view()),
	url(r'opcion/(?P<pk>[0-9]+)$', views.OpcionDetail.as_view()),
	url(r'^historia$', views.HistoriaList.as_view()),
	url(r'historia/(?P<pk>[0-9]+)$', views.HistoriaDetail.as_view()),
	url(r'^pregunta_paciente$', views.Pregunta_PacienteList.as_view()),
	url(r'pregunta_paciente/(?P<pk>[0-9]+)$', views.Pregunta_PacienteDetail.as_view()),
	url(r'^opcion_pregunta$', views.Opcion_PreguntaList.as_view()),
	url(r'opcion_pregunta/(?P<pk>[0-9]+)$', views.Opcion_PreguntaDetail.as_view()),
	]