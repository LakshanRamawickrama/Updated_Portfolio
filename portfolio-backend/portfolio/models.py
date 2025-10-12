from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=100, blank=True)  # e.g. Individual / Group
    technologies = models.JSONField(default=list, blank=True)  # stores list of strings
    image = models.ImageField(upload_to='projects/', blank=True, null=True)  # <--- updated
    githubUrl = models.URLField(blank=True, null=True)
    liveUrl = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title


class SkillCategory(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, default="Code")  # Save icon name as string

    def __str__(self):
        return self.name

class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, related_name="skills", on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    level = models.IntegerField(default=0)  # percentage

    def __str__(self):
        return self.name


class Education(models.Model):
    DEGREE_TYPES = [
        ('Higher Education', 'Higher Education'),
        ('Secondary Education', 'Secondary Education'),
        ('Courses', 'Courses'),
        ('Other', 'Other'),
    ]

    degree = models.CharField(max_length=255)
    institution = models.CharField(max_length=255)
    period = models.CharField(max_length=100)  # e.g. 2023 - Present
    status = models.CharField(max_length=50)   # Completed / In Progress
    description = models.TextField(blank=True)
    type = models.CharField(max_length=50, choices=DEGREE_TYPES, default='Other')

    def __str__(self):
        return f"{self.degree} at {self.institution}"


class Certificate(models.Model):
    title = models.CharField(max_length=255)
    issuer = models.CharField(max_length=255)   # Provider (IBM, British Way etc.)
    date = models.CharField(max_length=100)     # e.g. Aug 2025
    description = models.TextField(blank=True)
    credentialUrl = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.title} - {self.issuer}"

    
class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=150)
    period = models.CharField(max_length=50)  
    type = models.CharField(max_length=100)   
    description = models.TextField()
    skills = models.JSONField(default=list)   

    def __str__(self):
        return f"{self.title} at {self.company}"  
    
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"  
    
class Resume(models.Model):
    title = models.CharField(max_length=100, default="Resume")
    file = models.FileField(upload_to='resumes/', blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
