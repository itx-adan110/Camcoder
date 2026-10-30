// Cloud backup is optional. The app works fully without it.
// Supabase dashboard -> Project Settings -> API:
//   SUPABASE_URL      = Project URL            (https://xxxx.supabase.co)
//   SUPABASE_ANON_KEY = anon / publishable key (safe to be public, your data is protected by the SQL policies in setup.sql)
// NEVER put the service_role / secret key here.
window.CAMCODER_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",
  BUCKET: "captures"
};
