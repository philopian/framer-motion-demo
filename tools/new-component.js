const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function templateContent(titleName) {
  const index = `export { default } from './${titleName}'`

  const jsx = `import styles from './${titleName}.module.scss'

export default function ${titleName}({ children, className, ...rest }) {
  let cx = styles.${titleName}
  if (className) cx = \`\${cx} \${className}\`
  return (
    <div className={cx} {...rest}>
      {children}
    </div>
  )
}
`
  const styles = `@import "@/styles/_vars";

.${titleName} {
color: $color-primary;
&:hover {}
}
`

  const test = `import { render, screen } from '@testing-library/react'
import React from 'react'

import ${titleName} from '@/components/${titleName}'

describe('${titleName}', () => {
  test('should have welcome message', () => {
    render(<${titleName}>helllo</${titleName}>)
    const welcomeElement = screen.getByText(/helllo/)
    expect(welcomeElement).toBeInTheDocument()
  })
})
`

  return { index, jsx, styles, test }
}

rl.question('Give your component a name ? ', (titleName) => {
  console.log(` [Creating] ${titleName} component`)

  // Make sure components folders exists
  if (!fs.existsSync('./src/components/')) fs.mkdirSync('./src/components/')

  // Make sure the component folder doesn't exisit
  const componentDir = `./src/components/${titleName}`
  const newFileName = `/index.js`
  if (fs.existsSync(newFileName)) {
    console.log(' [ERROR] Looks like that file already exists')
    rl.close()
  }

  // Make dir
  fs.mkdirSync(componentDir)

  // Make files
  const { index, jsx, styles, test } = templateContent(titleName)
  fs.writeFileSync(`${componentDir}/index.js`, index)
  fs.writeFileSync(`${componentDir}/${titleName}.jsx`, jsx)
  fs.writeFileSync(`${componentDir}/${titleName}.module.scss`, styles)
  // fs.writeFileSync(`${componentDir}/${titleName}.test.jsx`, test)

  rl.close()
})

rl.on('close', function () {
  console.log(`\nCheckout ./src/components/ directory for your new files`)
  process.exit(0)
})
