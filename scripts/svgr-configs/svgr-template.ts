import { Options } from '@svgr/babel-preset';
import { types } from '@babel/core';

const SvgrTemplate: Options['template'] = (variables, { tpl }) => {
  const refProp: types.ObjectPattern | types.Identifier = variables.props[1];

  const updatedImports: types.ImportDeclaration[] = [
    {
      type: 'ImportDeclaration',
      specifiers: [
        {
          type: 'ImportNamespaceSpecifier',
          local: {
            type: 'Identifier',
            name: 'React',
          },
        },
      ],
      source: {
        type: 'StringLiteral',
        value: 'react',
      },
    },
    {
      type: 'ImportDeclaration',
      specifiers: [
        {
          type: 'ImportSpecifier',
          local: {
            type: 'Identifier',
            name: 'Ref',
          },
          imported: {
            type: 'Identifier',
            name: 'Ref',
          },
        },
        {
          type: 'ImportSpecifier',
          local: {
            type: 'Identifier',
            name: 'forwardRef',
          },
          imported: {
            type: 'Identifier',
            name: 'forwardRef',
          },
        },
      ],
      source: {
        type: 'StringLiteral',
        value: 'react',
      },
    },
  ];

  const updatedJsxAttr: types.JSXElement['openingElement']['attributes'] = [
    ...variables.jsx.openingElement.attributes,
    {
      type: 'JSXSpreadAttribute',
      argument: {
        type: 'MemberExpression',
        object: {
          type: 'Identifier',
          name: 'sizes',
        },
        property: {
          type: 'Identifier',
          name: 'iconSize',
        },
        computed: true,
        optional: false,
      },
    },
  ];
  variables.jsx.openingElement.attributes = updatedJsxAttr;

  const updatedProps: Array<types.ObjectPattern | types.Identifier> = [
    {
      type: 'ObjectPattern',
      properties: [
        {
          type: 'ObjectProperty',
          shorthand: true,
          computed: false,
          key: {
            type: 'Identifier',
            name: 'iconSize',
          },
          value: {
            type: 'AssignmentPattern',
            left: {
              type: 'Identifier',
              name: 'iconSize',
            },
            right: {
              type: 'StringLiteral',
              value: 'md',
            },
          },
        },
        {
          type: 'RestElement',
          argument: {
            type: 'Identifier',
            name: 'props',
          },
        },
      ],
      typeAnnotation: {
        type: 'TSTypeAnnotation',
        typeAnnotation: {
          type: 'TSTypeReference',
          typeName: {
            type: 'Identifier',
            name: 'QuillSvgProps',
          },
        },
      },
    },
    refProp,
  ];
  return tpl`
    ${updatedImports};
    import { QuillSvgProps, SvgSize } from 'types';

    ${variables.interfaces};
    
          
    const sizes: SvgSize = {
      sm: {
        width: 24,
        height: 24,
      },
      md: {
        width: 32,
        height: 32,
      },
      lg: {
        width: 48,
        height: 48,
      },
      xl: {
        width: 64,
        height: 64,
      },
      '2xl': {
        width: 96,
        height: 96,
      },
    };

    export const ${variables.componentName} = (${updatedProps}) => (
      ${variables.jsx}
    );
  
    ${variables.exports};
    `;
};
export default SvgrTemplate;
