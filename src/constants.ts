import { Label } from './types.js';

export const DELETE = 'insert-rkey-of-delete-post-here';
export const LABEL_LIMIT = 1;
export const LABELS: Label[] = [
  {
    rkey: 'insert-rkey-here',
    identifier: 'hate-speech',
    locales: [
      { lang: 'en', name: 'Hate Speech 🚫', description: 'Content targeting protected groups with hateful language'},
      { lang: 'pt-BR', name: 'Discurso de Ódio 🚫', description: 'Conteúdo direcionado a grupos protegidos com linguagem odiosa'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'harassment',
    locales: [
      { lang: 'en', name: 'Harassment ⚠️', description: 'Bullying, intimidation, or targeted abuse'},
      { lang: 'pt-BR', name: 'Assédio ⚠️', description: 'Bullying, intimidação ou abuso direcionado'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'spam',
    locales: [
      { lang: 'en', name: 'Spam 📧', description: 'Repetitive, promotional, or deceptive content'},
      { lang: 'pt-BR', name: 'Spam 📧', description: 'Conteúdo repetitivo, promocional ou enganoso'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'violence',
    locales: [
      { lang: 'en', name: 'Violence 🛡️', description: 'Threats, violence, or harmful content'},
      { lang: 'pt-BR', name: 'Violência 🛡️', description: 'Ameaças, violência ou conteúdo prejudicial'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'sexual-content',
    locales: [
      { lang: 'en', name: 'Sexual Content 🔞', description: 'Explicit or inappropriate sexual material'},
      { lang: 'pt-BR', name: 'Conteúdo Sexual 🔞', description: 'Material sexual explícito ou inadequado'},
    ]
  },
];
