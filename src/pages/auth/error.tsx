import { useRouter } from 'next/router'

export default function error() {

    const Router = useRouter();
    const { error } = Router.query;

    return (
        <div>
            {JSON.stringify(error)}
        </div>
    )
}
