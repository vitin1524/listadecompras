// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://lkvtmyrmgphkxtgjruhe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrdnRteXJtZ3Boa3h0Z2pydWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTE3NDgsImV4cCI6MjA4NzY4Nzc0OH0.ZZtonZqC7JJTpFlXJKvGcnYl4zA_AFS0MekGH-Y-TZU'
)