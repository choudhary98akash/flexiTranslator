import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent {
  steps = [
    {
      title: 'Step 1: Sign Up',
      description: 'Create an account on FlexiTranslate by clicking on the "Sign Up" button.'
    },
    {
      title: 'Step 2: Choose Your Plan',
      description: 'Select a suitable plan that fits your translation needs. FlexiTranslate offers various subscription plans.'
    },
    {
      title: 'Step 3: Add Credits',
      description: 'Add translation credits to your account. You can purchase credits based on your usage.'
    },
    {
      title: 'Step 4: Upload Documents',
      description: 'Upload the documents or text you want to translate. FlexiTranslate supports multiple file formats.'
    },
    {
      title: 'Step 5: Choose Languages',
      description: 'Specify the source language and target language for your translation. FlexiTranslate supports a wide range of languages.'
    },
    {
      title: 'Step 6: Review and Confirm',
      description: 'Review the translation details, cost, and estimated delivery time. Confirm your translation request.'
    },
    {
      title: 'Step 7: Download Translations',
      description: 'Once the translation is complete, download your translated documents from your dashboard.'
    }
  ];
}
