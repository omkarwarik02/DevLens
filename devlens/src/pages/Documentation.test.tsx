import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Documentation from './Documentation';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Documentation Component', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('token', 'test-token');
    jest.clearAllMocks();
  });

  test('renders heading', () => {
    render(
      <MemoryRouter>
        <Documentation />
      </MemoryRouter>
    );
    expect(screen.getByText('Documentation')).toBeInTheDocument();
  });

  test('Get Started Free button navigates to /signup', async () => {
    render(
      <MemoryRouter>
        <Documentation />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: 'Get Started Free' });
    await userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith('/signup');
  });
  test('Getting Started button scrolls to getting started section',async ()=>{
    const user = userEvent.setup();

   const mockElement = { scrollIntoView: jest.fn() } as any;
    const getElementByIdSpy = jest.spyOn(document,'getElementById').mockReturnValue(mockElement);
    render(
        <MemoryRouter>
            <Documentation />
        </MemoryRouter>
    );

    const gettingStartedBtn = screen.getAllByRole('button', {
        name:'Getting Started'
    });
    await user.click(gettingStartedBtn[0]);

    expect(getElementByIdSpy).toHaveBeenCalledWith('getting-started');
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
        behavior:'smooth',
    });
    getElementByIdSpy.mockRestore();
  })
});
