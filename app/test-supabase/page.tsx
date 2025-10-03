'use client'

import { useState } from 'react'
import { testSupabaseConnection } from '@/lib/test-supabase'

interface TestResult {
  success: boolean;
  message: string;
  details?: string | Record<string, unknown>;
}

export default function TestSupabasePage() {
  const [testResult, setTestResult] = useState<TestResult | null>(null)
  const [loading, setLoading] = useState(false)

  const runTest = async () => {
    setLoading(true)
    setTestResult(null)
    
    try {
      const result = await testSupabaseConnection()
      console.log('Test completed:', result)
      
      setTestResult({
        success: true,
        message: 'Supabase connection test completed successfully!',
        details: result
      })
    } catch (error) {
      console.error('Test failed:', error)
      setTestResult({
        success: false,
        message: 'Supabase connection test failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            🧪 Supabase API Connection Test
          </h1>
          <p className="text-gray-600">
            Test the connection to your Supabase instance and verify API functionality.
          </p>
        </div>

        <div className="mb-6">
          <button
            onClick={runTest}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            {loading ? '🔄 Running Tests...' : '🚀 Run Connection Test'}
          </button>
        </div>

        {testResult && (
          <div className={`p-4 rounded-lg ${testResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="mb-3">
              <div className={`font-semibold ${testResult.success ? 'text-green-800' : 'text-red-800'}`}>
                {testResult.success ? '✅' : '❌'} {testResult.message}
              </div>
            </div>

            {testResult.details && (
              <div className="mt-4">
                <div className="font-medium text-gray-700 mb-2">Test Details:</div>
                <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto max-h-96 overflow-y-auto">
                  {typeof testResult.details === 'string' 
                    ? testResult.details 
                    : JSON.stringify(testResult.details, null, 2)
                  }
                </pre>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">📋 What This Test Checks:</h3>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• Supabase client creation with environment variables</li>
            <li>• Authentication service availability</li>
            <li>• Database connection and query execution</li>
            <li>• Environment variable validation</li>
          </ul>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          💡 Check the browser console for detailed logs during the test execution.
        </div>
      </div>
    </div>
  )
}