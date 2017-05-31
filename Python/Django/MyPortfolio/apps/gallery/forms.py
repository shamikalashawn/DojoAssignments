from django import forms

class PictureForm(forms.Form):
    pass
    uploaded_at = models.DateTimeField(auto_now_add=True)
