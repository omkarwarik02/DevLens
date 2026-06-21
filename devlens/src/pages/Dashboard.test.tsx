import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dashboard from './Dashboard';
import { Sparkles } from 'lucide-react';


jest.mock('../config', () => 'http://localhost:3000');

jest.mock('react-markdown',()=> {
  return function MockReactMarkdown({children}:{children:string}) {
    return <div data-testid="markdown">{children}</div>
  };
});

jest.mock('lucide-react',()=>({
  Sparkles:()=> <div/>,
}));

describe('Mocks Verification', () => {

  test('config mock return correct value', ()=>{
    const config = require('../config');
    expect(config).toBe('http://localhost:3000');
  })



})

describe('Dashboard Component', ()=> {
  beforeEach(()=>{
    localStorage.clear();
    localStorage.setItem('token', 'test-token');
    jest.clearAllMocks();
  });

  test('renders Code Review heading', () =>{
    render(<Dashboard/>);
    expect(screen.getByText('Code Review')).toBeInTheDocument();
  });
  test('renders language select dropdown', () => {
    render(<Dashboard/>);
    const select =screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });
  test('renders Review Code button', ()=> {
    render(<Dashboard/>);
    const button = screen.getByRole('button',{name:'Review Code'});
    expect(button).toBeInTheDocument();
  });
  test('user can type code in textarea', async ()=> {
    const user = userEvent.setup();
    render(<Dashboard/>);
    const textarea = screen.getByPlaceholderText('Paste your code here...');
    await user.type(textarea,'const x = 5;');
    expect(textarea).toHaveValue('const x = 5;')
  })
});

