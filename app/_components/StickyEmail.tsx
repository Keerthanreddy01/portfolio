import { GENERAL_INFO, GMAIL_URL } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 block">
            <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 text-muted-foreground tracking-[1px] transition-all !bg-bottom hover:text-primary hover:!bg-center"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>
        </div>
    );
};

export default StickyEmail;
