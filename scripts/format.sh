echo 'Running built-in code formatter...'

deno fmt print-width 120 tab-width 4 use-tabs true no-semi false single-quote true trailing-comma false no-bracket-spacing true arrow-parens avoid prose-wrap preserve **/*

echo 'Code formatted successfully.'

echo '--- --- --- --- ---'
