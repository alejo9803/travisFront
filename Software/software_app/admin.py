from django.contrib import admin

from software_app.models import Psicologo

from software_app.models import Paciente

from software_app.models import Opcion

from software_app.models import Respuesta

from software_app.models import Pregunta

from software_app.models import Pregunta_Paciente

from software_app.models import Historia

from software_app.models import Opcion_Pregunta

admin.site.register(Psicologo)

admin.site.register(Paciente)

admin.site.register(Opcion)

admin.site.register(Respuesta)

admin.site.register(Pregunta)

admin.site.register(Pregunta_Paciente)

admin.site.register(Historia)

admin.site.register(Opcion_Pregunta)
# Register your models here.
