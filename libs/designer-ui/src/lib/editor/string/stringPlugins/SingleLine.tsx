import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { KEY_ENTER_COMMAND } from 'lexical';
import { useEffect } from 'react';

export default function SingleLine() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.registerCommand(
      KEY_ENTER_COMMAND,
      (payload: any) => {
        const event: KeyboardEvent = payload;
        event.preventDefault();
        return true;
      },
      3
    );
    const unregisterListener = editor.registerUpdateListener(() => {
      // An update has occurred!
    });
    return () => {
      unregisterListener();
    };
  }, [editor]);
  return null;
}
