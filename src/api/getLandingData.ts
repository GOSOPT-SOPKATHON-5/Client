interface AProps {
    a: {
        a: {
            a: {
                a: string;
            }
        }
    }
}

const B: AProps = {
    a: {
        a: {
            a: {
                a: 'a'
            }
        }
    }
}

export default B;