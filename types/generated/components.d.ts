import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogPartBlog extends Schema.Component {
  collectionName: 'components_blog_part_blogs';
  info: {
    displayName: 'blog';
    description: '';
  };
  attributes: {
    blogImage: Attribute.Media;
    author: Attribute.String;
    date: Attribute.Date;
    title: Attribute.String;
    excerpt: Attribute.Text;
    button: Attribute.Component<'buttons.button'>;
  };
}

export interface ButtonsButton extends Schema.Component {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    buttonText: Attribute.String;
    ButtonUrl: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

export interface ContactPartContactItem extends Schema.Component {
  collectionName: 'components_contact_part_contact_items';
  info: {
    displayName: 'contactItem';
    icon: 'phone';
  };
  attributes: {
    icon: Attribute.Media;
    text: Attribute.String;
  };
}

export interface DesignationDesignation extends Schema.Component {
  collectionName: 'components_designation_designations';
  info: {
    displayName: 'Designation';
    description: '';
  };
  attributes: {
    designations: Attribute.String;
  };
}

export interface MenuMenuItem extends Schema.Component {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'menu-item';
    description: '';
  };
  attributes: {
    menuItem: Attribute.String;
    url: Attribute.String;
  };
}

export interface ServicePartService extends Schema.Component {
  collectionName: 'components_service_part_services';
  info: {
    displayName: 'Service';
    icon: 'check';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SkillPartSkill extends Schema.Component {
  collectionName: 'components_skill_part_skills';
  info: {
    displayName: 'skill';
    icon: 'magic';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
  };
}

export interface SocialIconSocialicons extends Schema.Component {
  collectionName: 'components_social_icon_socialicons';
  info: {
    displayName: 'Socialicons';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    socialIconUrl: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

export interface TestimonialPartTestimonial extends Schema.Component {
  collectionName: 'components_testimonial_part_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'quote';
  };
  attributes: {
    testimony: Attribute.Text;
    name_designation: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-part.blog': BlogPartBlog;
      'buttons.button': ButtonsButton;
      'contact-part.contact-item': ContactPartContactItem;
      'designation.designation': DesignationDesignation;
      'menu.menu-item': MenuMenuItem;
      'service-part.service': ServicePartService;
      'skill-part.skill': SkillPartSkill;
      'social-icon.socialicons': SocialIconSocialicons;
      'testimonial-part.testimonial': TestimonialPartTestimonial;
    }
  }
}
