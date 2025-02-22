import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.Text;
  };
}

export interface SharedHowItsWorkCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_how_its_work_cards';
  info: {
    displayName: 'How its work card';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    Address: Schema.Attribute.Text;
    Email: Schema.Attribute.String;
    Facebook: Schema.Attribute.Text;
    Telephone: Schema.Attribute.String;
    Website: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.faq': SharedFaq;
      'shared.how-its-work-card': SharedHowItsWorkCard;
      'shared.seo': SharedSeo;
      'shared.social': SharedSocial;
    }
  }
}
