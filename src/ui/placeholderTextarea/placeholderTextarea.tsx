'use client';
import {ReactNode, useState} from 'react';
import './placeholderTextarea.scss'

type Props = {
    value: string;
    onChange: (val: string) => void;
    placeholderContent: ReactNode;
};

export default function PlaceholderTextarea({ value, onChange, placeholderContent }: Props) {
    const [focused, setFocused] = useState(false);

    return (
        <div className="textarea-wrapper">
      <textarea
          className="textarea-another"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(value !== '')}
      />

            {!focused && !value && (
                <div className="textarea-placeholder">
                    {placeholderContent}
                </div>
            )}
        </div>
    );
}