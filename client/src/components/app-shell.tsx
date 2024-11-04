import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import SkipToMain from './skip-to-main'
import { Layout } from './custom/layout'
import { Search } from './search'
import ThemeSwitch from './theme-switch'
import { UserNav } from './user-nav'

export default function AppShell() {
  const [isCollapsed] = useIsCollapsed()

  return (
    <div className='relative flex h-full bg-background'>
      <SkipToMain />

      <Sidebar />

      <main
        id='content'
        className={`flex w-full flex-col overflow-x-hidden pt-16 transition-[margin] ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
      >
        <Layout>
          <Layout.Header className='fixed left-0 top-0 z-10 w-full bg-background shadow-md'>
            <div className='ml-auto flex items-center space-x-4 p-4'>
              <Search />
              <ThemeSwitch />
              <UserNav />
            </div>
          </Layout.Header>

          <div className='flex-grow overflow-auto pt-16'>
            <Outlet />
          </div>
        </Layout>
      </main>
    </div>
  )
}
