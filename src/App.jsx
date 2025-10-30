import { useState } from 'react'
import { Trash2, Plus, Check, X } from 'lucide-react';
import './App.css'

function App() {
  const [todos, setTodos] = useState ([
    { id: 1, text: 'Learn Tailwind CSS', completed: false },
    { id: 2, text: 'Build a React App', completed: true },
    { id: 3, text: 'Master Responsive Design', completed: false }
  ]);
  const [ inputValue, setInputValue] = useState('');
  const [ filter, setFilter] = useState('all');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id? {...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if(filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <>
     <div className="min-h-screen bg-linear-to-br from-blue-100 via-pink-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            My Tasks
          </h1>
          <p className="text-gray-600">Exploring Tailwind CSS styling</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Input Section */}
          <div className="p-6 bg-linear-to-r from-blue-300 to-red-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 rounded-lg border-2 border-transparent focus:border-white focus:outline-none text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={addTodo}
                className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex border-b border-gray-200">
            {['all', 'active', 'completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  filter === f
                    ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Todo List */}
          <div className="divide-y divide-gray-100">
            {filteredTodos.length === 0 ? (
              <div className="p-12 text-center text-gray-400">
                <p className="text-lg">No tasks found</p>
                <p className="text-sm mt-2">Add a task to get started!</p>
              </div>
            ) : (
              filteredTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="p-4 hover:bg-gray-50 transition-colors duration-150 flex items-center gap-4 group"
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      todo.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 hover:border-purple-500'
                    }`}
                  >
                    {todo.completed && <Check size={16} className="text-white" />}
                  </button>

                  {/* Todo Text */}
                  <span
                    className={`flex-1 transition-all duration-200 ${
                      todo.completed
                        ? 'text-gray-400 line-through'
                        : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="shrink-0 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {todos.length > 0 && (
            <div className="p-4 bg-gray-50 text-sm text-gray-600 flex justify-between items-center">
              <span>
                {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
              </span>
              <span className="text-xs text-gray-400">
                {todos.length} total
              </span>
            </div>
          )}
        </div>

        {/* Tailwind Features Used */}
        <div className="mt-8 p-6 bg-white bg-opacity-70 rounded-xl backdrop-blur-sm">
          <h3 className="font-semibold text-gray-700 mb-3">Tailwind Features Used:</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div>• Gradient backgrounds</div>
            <div>• Hover states</div>
            <div>• Transitions</div>
            <div>• Flexbox layouts</div>
            <div>• Responsive spacing</div>
            <div>• Shadow utilities</div>
            <div>• Border radius</div>
            <div>• Color system</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
