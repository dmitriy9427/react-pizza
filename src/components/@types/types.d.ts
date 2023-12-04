declare module'*.svg' {
    const content: any
    export default content
}

declare module'*.png' {
    const content: any
    export default content
}

declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames
    export = classNames;
  }

  declare module '*.module.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames
    export = classNames;
  }