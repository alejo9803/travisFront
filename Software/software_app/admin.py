from django.contrib import admin

from software_app.models import Psicologo

from software_app.models import Paciente

from software_app.models import Pregunta

from software_app.models import Pregunta_Paciente

from software_app.models import Historia

from software_app.models import Contador

admin.site.register(Psicologo)

admin.site.register(Paciente)

admin.site.register(Pregunta)

admin.site.register(Pregunta_Paciente)

admin.site.register(Historia)

admin.site.register(Contador)
# Register your models here.
