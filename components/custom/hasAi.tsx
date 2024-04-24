import {Callout} from 'nextra/components'

function InformationAlert() {
    return (
        <Callout type="info" emoji="ℹ️">
            Этот шаблон поддерживает работу с искусственным интеллектом. <a href="/ai"
                                                                            className="nx-text-gray-800 nx-underline">Подробнее</a>.
        </Callout>
    );
}

export default function HasAi() {
    return (
        <div>
            <InformationAlert/>
        </div>
    );
}


