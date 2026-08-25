import './App.css'

interface UserCardProps {
  name: string
  age: number
  isAdmin: boolean
}

function UserCard({ name, age, isAdmin }: UserCardProps) {
  return (
    <article className={`user-card ${isAdmin ? 'admin-card' : ''}`}>
      <p className="role">{isAdmin ? 'ADMIN' : 'MEMBER'}</p>
      <h2>{name}</h2>
      <p>Tuổi: {age}</p>
      <strong>{isAdmin ? 'Quản trị viên' : 'Thành viên'}</strong>
    </article>
  )
}

function App() {

  return (
    <main className="app">
      <p className="eyebrow">Bài 1 / React + TypeScript</p>
      <h1>Thẻ thông tin thành viên</h1>
    

      <section className="cards" aria-label="Danh sách thành viên">
        <UserCard name="Nguyễn An" age={22} isAdmin={true} />
        <UserCard name="Trần Bình" age={20} isAdmin={false} />
      </section>
    </main>
  )
}

export default App
