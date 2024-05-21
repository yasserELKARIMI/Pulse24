(function () {
    const { registerBlockType } = wp.blocks;
    const { TextControl } = wp.components;

    registerBlockType('namespace/custom-block', {
        title: 'Custom Block',
        icon: 'smiley',
        category: 'common',
        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'p',
            },
        },
        edit: ({ attributes, setAttributes }) => {
            return <TextControl value={attributes.content} onChange={(content) => setAttributes({ content })} />;
        },
        save: ({ attributes }) => {
            return <p>{attributes.content}</p>;
        },
    });
})();

jQuery(document).ready(function($) {
    $('#custom_footer_columns').on('change', function() {
        var columns = $(this).val();
        $.post(ajaxurl, {
            action: 'update_footer_columns',
            columns: columns,
            post_id: $('#post_ID').val(),
            _wpnonce: $('#footer_columns_nonce').val()
        });
    });
});
