// https://github.com/graphql/graphql-spec/issues/91#issuecomment-254895093
export default `fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}

fragment InputValue on __InputValue {
  name
  description
  type { ...TypeRef }
  defaultValue
}

fragment TypeField on __Field {
  name
  description
  args {
    ...InputValue
  }
  type {
    ...TypeRef
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields {
    ...TypeField
  }
}

query Type($name: String!) {
  __type(name: $name) {
    ...FullType
    fields {
      type {
        ...FullType
        fields {
          type {
            ...FullType
            fields {
              type {
                ...FullType
                fields {
                  type {
                    ...FullType
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;