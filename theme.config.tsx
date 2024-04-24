import React from 'react'
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
    logo: <span className="nx-text-xl nx-font-bold">Padwork.ru</span>,
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Документация padwork.ru'
        }
    },
    editLink: {
        text: null
    },
    feedback: {
        content: null
    },
    toc: {
        title: "Содержание"
    },
    search: {
        placeholder: "Поиск"
    },
    themeSwitch: {
        useOptions: {
            dark: "Тёмная",
            light: "Светлая",
            system: "Системная"
        }
    },
    head: () => {
        const {asPath, defaultLocale, locale} = useRouter()
        const {frontMatter} = useConfig()
        const url =
            `https://docs.padwork.ru/${asPath}`
        return (
            <>
                <meta property="og:url" content={url}/>
                <meta property="og:title" content={frontMatter.title || 'Документация Padwork'}/>
                <meta
                    property="og:description"
                    content={frontMatter.description || 'Документация для сервиса padwork.ru'}
                />
            </>
        )
    },
    /*project: {
      link: 'https://github.com/shuding/nextra-docs-template',
    },*/
    /*chat: {
      link: 'https://discord.com',
    },*/
    //docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
    footer: {
        text: 'Padwork.ru',
    },
}

export default config
