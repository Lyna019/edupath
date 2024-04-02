import { CSSTransition, TransitionGroup } from 'react-transition-group';

// In your component
return (
  <TransitionGroup>
    <CSSTransition
      key={key} // A unique key that changes when the section changes
      timeout={500}
      classNames="fade"
    >
      <Section /> // Your section component
    </CSSTransition>
  </TransitionGroup>
);
