from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, SkillCategory,Education, Certificate, Experience, ContactMessage, Resume
from .serializers import ProjectSerializer, SkillCategorySerializer, EducationSerializer, CertificateSerializer, ExperienceSerializer, ContactMessageSerializer, ResumeSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
class SkillCategoryViewSet(viewsets.ModelViewSet):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all().order_by('-id')
    serializer_class = EducationSerializer


class CertificateViewSet(viewsets.ModelViewSet):
    queryset = Certificate.objects.all().order_by('-id')
    serializer_class = CertificateSerializer
    
class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all().order_by('-id')  
    serializer_class = ExperienceSerializer
    
class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact_message = serializer.save()
        
        # Send email to yourself
        send_mail(
            subject=f"New message from {contact_message.name}",
            message=f"""
                Name: {contact_message.name}
                Email: {contact_message.email}
                Subject: {contact_message.subject}
                Message: {contact_message.message}
            """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.DEFAULT_FROM_EMAIL],  # your email
            fail_silently=False,
        )

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    
class ResumeListView(APIView):
    def get(self, request):
        resumes = Resume.objects.all()
        serializer = ResumeSerializer(resumes, many=True)
        return Response(serializer.data)