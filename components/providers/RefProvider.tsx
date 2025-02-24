import React, {
  createContext,
  useRef,
  useContext,
  ReactNode,
  RefObject,
  useState,
} from 'react';

type RefProviderContext = {
  ref: RefObject<HTMLDivElement | null> | null;
  updateElement?: (newElement: HTMLElement) => void;
};
const RefContext = createContext<RefProviderContext>({
  ref: null,
  updateElement: () => {},
});

export const RefProvider = ({
  children,
}: {
  children: Readonly<ReactNode>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const updateElement = (newElement: HTMLElement) => setElement(newElement);

  let state = {
    ref,
    updateElement,
  };

  return <RefContext.Provider value={state}>{children}</RefContext.Provider>;
};

export const useSectionRef = () => useContext(RefContext);
