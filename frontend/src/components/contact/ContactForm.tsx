import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { contentService } from '@/services/contentService';
import type { ContactPayload } from '@/types/api';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<ContactPayload>({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await contentService.submitContact(form);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your message.');
    } finally {
      setLoading(false);
    }
  };

  if (sent)
    return (
      <div className="rounded-2xl bg-[var(--color-card)] p-8 text-center shadow-[var(--shadow-card)]">
        <h3 className="text-lg font-semibold">Message sent</h3>
        <p className="mt-2 text-sm text-[var(--color-muted)]">Thanks — we will respond to your message soon.</p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Input value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} placeholder="Your name" required />
      <Input value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} placeholder="Email" type="email" required />
      <Input value={form.subject ?? ''} onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))} placeholder="Subject" />
      <Textarea value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} placeholder="Message" rows={6} required />
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      <div className="flex justify-end">
        <Button type="submit" loading={loading}>Send message</Button>
      </div>
    </form>
  );
}
