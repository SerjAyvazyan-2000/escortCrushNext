'use client';
import React from 'react';
import './uploadErrors.scss'

type UploadErrorsProps = {
    errors: string[];
};

export default function UploadErrors({ errors }: UploadErrorsProps) {
    if (!errors.length) return null;

    return (
        <div className="upload-errors G-flex-column">
            {errors.map((err, i) => (
                <div key={i} className="upload-error G-align-start">
                    <i className="icon icon-info"></i>
                    <p>{err}</p>
                </div>
            ))}
        </div>
    );
}