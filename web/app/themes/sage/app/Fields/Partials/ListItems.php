<?php

namespace App\Fields\Partials;

use Log1x\AcfComposer\Builder;
use Log1x\AcfComposer\Partial;

class ListItems extends Partial
{
    /**
     * The partial field group.
     */
    public function fields(): Builder
    {
        $listItems = Builder::make('list_items');

        $listItems
            ->addRepeater('items')
                ->addText('item')
            ->endRepeater();

        return $listItems;
    }
}
