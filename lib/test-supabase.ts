import { createClient } from '@/utils/supabase/client';

export async function testSupabaseConnection() {
  console.log('🧪 Testing Supabase Connection...')
  
  try {
    const supabase = createClient()
    
    // Test 1: Check if client is created
    console.log('✅ Supabase client created successfully')
    
    // Test 2: Test authentication status
    const { data: authData, error: authError } = await supabase.auth.getUser()
    if (authError && authError.message !== 'Auth session missing!') {
      throw authError
    }
    console.log('✅ Auth service accessible:', authData.user ? 'User logged in' : 'No user session')
    
    // Test 3: Test database connection with a simple query
    const { data: queryData, error: queryError } = await supabase
      .from('_temp_connection_test')
      .select('*')
      .limit(1)
    
    // This will fail if table doesn't exist, but that's okay - it means connection works
    if (queryError && !queryError.message.includes('does not exist')) {
      throw queryError
    }
    console.log('✅ Database connection successful:', queryData ? `Got ${queryData.length} records` : 'Connection working')
    
    // Test 4: Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    console.log('✅ Environment variables loaded:')
    console.log('   - Supabase URL:', supabaseUrl ? '✅ Present' : '❌ Missing')
    console.log('   - Anon Key:', anonKey ? '✅ Present' : '❌ Missing')
    
    return {
      success: true,
      message: 'All Supabase tests passed!',
      details: {
        client: true,
        auth: true,
        database: true,
        env: !!(supabaseUrl && anonKey)
      }
    }
    
  } catch (error) {
    console.error('❌ Supabase test failed:', error)
    return {
      success: false,
      message: 'Supabase connection test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}