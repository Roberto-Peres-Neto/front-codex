import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { makeLoginModule } from '../main/factories/modules'
import { makeLoadMenu } from '../main/factories/usecase'
import type { MenuItem } from '../data/models'

const { Header, Content } = Layout

const moduleMap: Record<string, JSX.Element> = {
  login: makeLoginModule(),
}

const loadMenuUseCase = makeLoadMenu()

function App() {
  const [menu, setMenu] = useState<MenuItem[]>([])

  useEffect(() => {
    loadMenuUseCase.execute().then(setMenu).catch(console.error)
  }, [])

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Menu theme="dark" mode="horizontal">
            {menu.map((item) => (
              <Menu.Item key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: 24 }}>
          <Routes>
            <Route path="/" element={makeLoginModule()} />
            {menu.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={moduleMap[item.module] ?? <div>Module not found</div>}
              />
            ))}
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}

export default App
