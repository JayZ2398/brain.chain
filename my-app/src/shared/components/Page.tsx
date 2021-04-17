import React, { PropsWithChildren } from 'react'

type PageProps = PropsWithChildren<{

}>

function Page({ children, ...rest }: PageProps) {
    return (
        <div
            {...rest}
        >
            {children}
        </div>
    );
}

export default Page