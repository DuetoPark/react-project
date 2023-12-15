export default function todoReducer (state, action) {

  switch (action.type) {
    case 'added': {
      const {_id, _content, _isDone} = action;
      
      return [
        ...state,
        {
          idx: _id,
          content: _content,
          isDone: _isDone
        }
      ]
    }

    case 'updated': {
      const {_id, _value} = action;

      const _newData = [...state];
      const _idx = state.findIndex(todo => todo.idx === _id);
      _newData[_idx].content = _value;

      return _newData;
    }

    case 'done': {
      const {_id, _isChecked} = action;

      const _newData = [...state];
      const _idx = state.findIndex(todo => todo.idx === _id);
      _newData[_idx].isDone = _isChecked;

      return _newData;
    }
    
    case 'deleted': {
      const {_id} = action;
      
      return [...state].filter(v => v.idx !== _id);
    }

    case 'reset': {
      return [];
    }

    default: {
      throw Error(`아갓씌, 해당 타입은 없습니다 🥸 (${action.type})`);
    }
  }
};