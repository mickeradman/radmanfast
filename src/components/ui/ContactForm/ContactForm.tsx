'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui';
import styles from '@/components/ui/ContactForm/ContactForm.module.css';

const FormContent = () => {
  const [issue, setIssue] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleSetIssue = (e: any) => {
      setIssue(e.detail);

      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener(
      'setContactIssue',
      handleSetIssue,
    );
    return () =>
      window.removeEventListener(
        'setContactIssue',
        handleSetIssue,
      );
  }, []);

  useEffect(() => {
    const contactType = searchParams.get('contact');

    if (
      contactType === 'allman' ||
      contactType === 'offert'
    ) {
      setIssue(contactType);

      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      const newUrl =
        window.location.pathname + window.location.hash;
      window.history.replaceState({}, '', newUrl);
    }
  }, [searchParams]);

  return (
    <form
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
        alert(
          'Tack för ditt meddelande! Vi återkommer så snart som möjligt.',
        );
      }}>
      <div className={styles.formGroup}>
        <label
          htmlFor='issueType'
          className={styles.formLabel}>
          Ärendetyp
        </label>
        <select
          id='issueType'
          name='issueType'
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className={styles.formInput}
          required>
          <option value=''>Välj ärendetyp</option>
          <option value='offert'>Offert</option>
          <option value='allman'>Allmän fråga</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='name' className={styles.formLabel}>
          Namn
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className={styles.formInput}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='email' className={styles.formLabel}>
          E-post
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className={styles.formInput}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label
          htmlFor='message'
          className={styles.formLabel}>
          Meddelande
        </label>
        <textarea
          id='message'
          name='message'
          className={styles.formInput}
          required
        />
      </div>

      <Button type='submit' className={styles.formButton}>
        Skicka meddelande
      </Button>
    </form>
  );
};

export const ContactForm = () => {
  return (
    <div id='contact-form-wrapper'>
      <Suspense fallback={<div>Laddar formulär...</div>}>
        <FormContent />
      </Suspense>
    </div>
  );
};
